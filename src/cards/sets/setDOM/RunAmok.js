"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunAmok extends UnimplementedCard {
  constructor (game) {
    super(game, "Run Amok", "Dominaria", "DOM");
  }
}

module.exports = RunAmok;
