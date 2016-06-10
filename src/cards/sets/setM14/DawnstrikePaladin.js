"use strict";
const Constants = require ("../../../Constants");
const DawnstrikePaladinBase = require("../setDDL/DawnstrikePaladin");

class DawnstrikePaladin extends DawnstrikePaladinBase {
  constructor (game) {
    super(game, "Dawnstrike Paladin", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DawnstrikePaladin;
