import { withRouter } from "react-router";
import {
  CardDetail,
  HeaderDiv,
  DetailDiv,
  Li,
} from "../styles/ChampionDetailStyle";
import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import starIcon from "@iconify-icons/entypo/star";
import { API_BASE_URL } from "../constants";
import { UserContext } from "../contexts/UserContext";

const ChampionDetail = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const [favourite, setFavourite] = useState(
    props.location.state.champion.favourite
  );

  const toggleFavouriteChamp = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: props.location.state.champion.key,
    };
    fetch(`${API_BASE_URL}/user/update-favourite`, requestOptions);
    props.location.state.champion.favourite =
      !props.location.state.champion.favourite;
    setFavourite(props.location.state.champion.favourite);
  };

  return (
    <DetailDiv>
      <CardDetail>
        <img
          width="350px"
          alt="test"
          src={`https://ddragon.canisback.com/img/champion/tiles/${
            props.location.state.champion.id === "Fiddlesticks"
              ? "FiddleSticks"
              : props.location.state.champion.id
          }_0.jpg`}
        ></img>
        <div>
          <Icon
            icon={starIcon}
            color={favourite ? "#d3b509" : "black"}
            onClick={toggleFavouriteChamp}
          />
          <HeaderDiv>
            <h2>{props.location.state.champion.name}</h2>
          </HeaderDiv>
          <HeaderDiv>
            <h4>{props.location.state.champion.title}</h4>
          </HeaderDiv>
          <br />
          <br />
          <HeaderDiv>
            <table>
              <thead>
                <tr>
                  <th>Tags:</th>
                </tr>
              </thead>
            </table>
            {props.location.state.champion.tags.map((t, index) => (
              <Li key={index}>{t}</Li>
            ))}
          </HeaderDiv>
          <br />
          <HeaderDiv>
            <table>
              <thead>
                <tr>
                  <th>Stats:</th>
                </tr>
              </thead>
            </table>
            <Li key="1">Attack: {props.location.state.champion.info.attack}</Li>
            <Li key="2">
              Defense: {props.location.state.champion.info.defense}
            </Li>
            <Li key="3">Magic: {props.location.state.champion.info.magic}</Li>
            <Li key="4">
              Difficulty: {props.location.state.champion.info.difficulty}
            </Li>
          </HeaderDiv>
        </div>
        <br />
        {props.location.state.champion.blurb}
        <br />
      </CardDetail>
      <CardDetail>
        <table>
          <thead>
            <tr>
              <th scope="col">Stat</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hp </td>
              <td>{props.location.state.champion.stats.hp}</td>
            </tr>
            <tr>
              <td>Hp/lvl</td>
              <td>{props.location.state.champion.stats.hpperlevel}</td>
            </tr>
            <tr>
              <td>Mana Points </td>
              <td>{props.location.state.champion.stats.mp}</td>
            </tr>
            <tr>
              <td>Mana Points/lvl </td>
              <td>{props.location.state.champion.stats.mpperlevel}</td>
            </tr>
            <tr>
              <td>Movement Speed </td>
              <td>{props.location.state.champion.stats.movespeed}</td>
            </tr>
            <tr>
              <td>Armor</td>
              <td>{props.location.state.champion.stats.armor}</td>
            </tr>
            <tr>
              <td>Armor/lvl </td>
              <td>{props.location.state.champion.stats.armorperlevel}</td>
            </tr>
            <tr>
              <td>magicResist</td>
              <td>{props.location.state.champion.stats.spellblock}</td>
            </tr>
            <tr>
              <td>Magic Resist/lvl </td>
              <td>{props.location.state.champion.stats.spellblockperlevel}</td>
            </tr>
            <tr>
              <td>Attack Range</td>
              <td>{props.location.state.champion.stats.attackrange}</td>
            </tr>

            <tr>
              <td>Hp Regen</td>
              <td>{props.location.state.champion.stats.hpregen}</td>
            </tr>
            <tr>
              <td>Hp Regen/lvl</td>
              <td>{props.location.state.champion.stats.hpregenperlevel}</td>
            </tr>
            <tr>
              <td>Mana Regen</td>
              <td>{props.location.state.champion.stats.mpregen}</td>
            </tr>
            <tr>
              <td>Mana Regen/lvl</td>
              <td>{props.location.state.champion.stats.mpregenperlevel}</td>
            </tr>
            <tr>
              <td>Critical Chance</td>
              <td>{props.location.state.champion.stats.crit}</td>
            </tr>
            <tr>
              <td>Critical Chance/lvl</td>
              <td>{props.location.state.champion.stats.critperlevel}</td>
            </tr>
            <tr>
              <td>Attack Damage</td>
              <td>{props.location.state.champion.stats.attackdamage}</td>
            </tr>
            <tr>
              <td>Attack Damage/lvl</td>
              <td>
                {props.location.state.champion.stats.attackdamageperlevel}
              </td>
            </tr>
            <tr>
              <td>Attack Speed</td>
              <td>{props.location.state.champion.stats.attackspeed}</td>
            </tr>
            <tr>
              <td>Attack Speed/lvl</td>
              <td>{props.location.state.champion.stats.attackspeedperlevel}</td>
            </tr>
          </tbody>
        </table>
      </CardDetail>
    </DetailDiv>
  );
};

export default withRouter(ChampionDetail);
