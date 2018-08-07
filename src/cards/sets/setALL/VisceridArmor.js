"use strict";
const Constants = require ("../../../Constants");
const VisceridArmorBase = require("../setME2/VisceridArmor");

class VisceridArmor extends VisceridArmorBase {
  constructor (game) {
    super(game, "Viscerid Armor", "Alliances", "ALL");
  }
}

module.exports = VisceridArmor;
