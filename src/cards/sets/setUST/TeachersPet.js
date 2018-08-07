"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeachersPet extends UnimplementedCard {
  constructor (game) {
    super(game, "Teacher's Pet", "Unstable", "UST");
  }
}

module.exports = TeachersPet;
