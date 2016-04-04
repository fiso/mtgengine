"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VisceridArmorBase = require("../setALL/VisceridArmor.js");

class VisceridArmor extends VisceridArmorBase {
  constructor(game) {
    super(game, "Viscerid Armor", "Masters Edition II", "ME2");
  }
}

module.exports = VisceridArmor;
