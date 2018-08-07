"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Prowler", "Nemesis", "NEM");
  }
}

module.exports = PhyrexianProwler;
