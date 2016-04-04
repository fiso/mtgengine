"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ActofTreasonBase = require("../setDDN/ActofTreason.js");

class ActofTreason extends ActofTreasonBase {
  constructor(game) {
    super(game, "Act of Treason", "Magic 2012", "M12");
  }
}

module.exports = ActofTreason;
