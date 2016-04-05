"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenMilitia extends UnimplementedCard {
  constructor(game) {
    super(game, "Thraben Militia", "Innistrad", "ISD");
  }
}

module.exports = ThrabenMilitia;
