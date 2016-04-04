"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianaoftheDarkRealmsBase = require("../setM13/LilianaoftheDarkRealms.js");

class LilianaoftheDarkRealms extends LilianaoftheDarkRealmsBase {
  constructor(game) {
    super(game, "Liliana of the Dark Realms", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LilianaoftheDarkRealms;
