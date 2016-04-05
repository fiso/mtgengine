"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofTresserhorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of Tresserhorn", "Alliances", "ALL");
  }
}

module.exports = LordofTresserhorn;
