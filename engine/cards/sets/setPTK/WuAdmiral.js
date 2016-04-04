"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WuAdmiral extends Card {
  constructor(game) {
    super(game, "Wu Admiral", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuAdmiral;
