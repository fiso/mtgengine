"use strict";
const Constants = require ("../../../Constants");
const TalentoftheTelepathBase = require("../setPORI/TalentoftheTelepath");

class TalentoftheTelepath extends TalentoftheTelepathBase {
  constructor (game) {
    super(game, "Talent of the Telepath", "Magic Origins", "ORI");
  }
}

module.exports = TalentoftheTelepath;
