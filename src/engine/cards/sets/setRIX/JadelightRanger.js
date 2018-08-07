"use strict";
const Constants = require ("../../../Constants");
const JadelightRangerBase = require("../setPRIX/JadelightRanger");

class JadelightRanger extends JadelightRangerBase {
  constructor (game) {
    super(game, "Jadelight Ranger", "Rivals of Ixalan", "RIX");
  }
}

module.exports = JadelightRanger;
