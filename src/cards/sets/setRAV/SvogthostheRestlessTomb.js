"use strict";
const Constants = require ("../../../Constants");
const SvogthostheRestlessTombBase = require("../setDDJ/SvogthostheRestlessTomb");

class SvogthostheRestlessTomb extends SvogthostheRestlessTombBase {
  constructor (game) {
    super(game, "Svogthos, the Restless Tomb", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SvogthostheRestlessTomb;
