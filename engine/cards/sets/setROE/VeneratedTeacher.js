"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeneratedTeacher extends UnimplementedCard {
  constructor(game) {
    super(game, "Venerated Teacher", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VeneratedTeacher;
