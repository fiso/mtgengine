"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KinTreeInvocation extends Card {
  constructor(game) {
    super(game, "Kin-Tree Invocation", "Khans of Tarkir", "KTK");
  }
}

module.exports = KinTreeInvocation;
