"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JungleHollowBase = require("../setC15/JungleHollow.js");

class JungleHollow extends JungleHollowBase {
  constructor(game) {
    super(game, "Jungle Hollow", "Khans of Tarkir", "KTK");
  }
}

module.exports = JungleHollow;
