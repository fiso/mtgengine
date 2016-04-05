"use strict";
const Constants = require ("../../../Constants");
const VisceridArmorBase = require("../setALL/VisceridArmor");

class VisceridArmor extends VisceridArmorBase {
  constructor(game) {
    super(game, "Viscerid Armor", "Masters Edition II", "ME2");
  }
}

module.exports = VisceridArmor;
