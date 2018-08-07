"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazakethsRite extends UnimplementedCard {
  constructor (game) {
    super(game, "Razaketh's Rite", "Hour of Devastation", "HOU");
  }
}

module.exports = RazakethsRite;
