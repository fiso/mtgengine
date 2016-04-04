"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SvogthostheRestlessTombBase = require("../setDDJ/SvogthostheRestlessTomb.js");

class SvogthostheRestlessTomb extends SvogthostheRestlessTombBase {
  constructor(game) {
    super(game, "Svogthos, the Restless Tomb", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SvogthostheRestlessTomb;
