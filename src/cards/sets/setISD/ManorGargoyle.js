"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManorGargoyle extends UnimplementedCard {
  constructor(game) {
    super(game, "Manor Gargoyle", "Innistrad", "ISD");
  }
}

module.exports = ManorGargoyle;
