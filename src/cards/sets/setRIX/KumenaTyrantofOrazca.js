"use strict";
const Constants = require ("../../../Constants");
const KumenaTyrantofOrazcaBase = require("../setPRIX/KumenaTyrantofOrazca");

class KumenaTyrantofOrazca extends KumenaTyrantofOrazcaBase {
  constructor (game) {
    super(game, "Kumena, Tyrant of Orazca", "Rivals of Ixalan", "RIX");
  }
}

module.exports = KumenaTyrantofOrazca;
