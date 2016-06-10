"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StudentofElements extends UnimplementedCard {
  constructor (game) {
    super(game, "Student of Elements", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StudentofElements;
