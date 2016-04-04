"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianaoftheDarkRealmsBase = require("../setM13/LilianaoftheDarkRealms.js");

class LilianaoftheDarkRealms extends LilianaoftheDarkRealmsBase {
  constructor(game) {
    super(game, "Liliana of the Dark Realms", "Media Inserts", "pMEI");
  }
}

module.exports = LilianaoftheDarkRealms;
