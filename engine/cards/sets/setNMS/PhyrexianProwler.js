"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianProwler extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Prowler", "Nemesis", "NMS");
  }
}

module.exports = PhyrexianProwler;
