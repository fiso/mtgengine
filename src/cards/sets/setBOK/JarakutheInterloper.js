"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JarakutheInterloper extends UnimplementedCard {
  constructor(game) {
    super(game, "Jaraku the Interloper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = JarakutheInterloper;
