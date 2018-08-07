"use strict";
module.exports = {
  AdornedPouncerToken: require("./AdornedPouncerToken"),
  ChampionofWitsToken: require("./ChampionofWitsToken"),
  DreamstealerToken: require("./DreamstealerToken"),
  EarthshakerKhenraToken: require("./EarthshakerKhenraToken"),
  Horse: require("./Horse"),
  Insect: require("./Insect"),
  ProvenCombatantToken: require("./ProvenCombatantToken"),
  Punchcard: require("./Punchcard"),
  ResilientKhenraToken: require("./ResilientKhenraToken"),
  SinuousStrikerToken: require("./SinuousStrikerToken"),
  Snake: require("./Snake"),
  SteadfastSentinelToken: require("./SteadfastSentinelToken"),
  SunscourgeChampionToken: require("./SunscourgeChampionToken")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTHOU = module.exports;}