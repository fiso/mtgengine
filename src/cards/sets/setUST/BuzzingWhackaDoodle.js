"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuzzingWhackaDoodle extends UnimplementedCard {
  constructor (game) {
    super(game, "Buzzing Whack-a-Doodle", "Unstable", "UST");
  }
}

module.exports = BuzzingWhackaDoodle;
