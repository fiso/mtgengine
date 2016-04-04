"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cloudskate extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloudskate", "Nemesis", "NMS");
  }
}

module.exports = Cloudskate;
