"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisceridArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Viscerid Armor", "Alliances", "ALL");
  }
}

module.exports = VisceridArmor;
