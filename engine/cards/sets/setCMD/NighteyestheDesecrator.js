"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NighteyestheDesecratorBase = require("../setCHK/NighteyestheDesecrator.js");

class NighteyestheDesecrator extends NighteyestheDesecratorBase {
  constructor(game) {
    super(game, "Nighteyes the Desecrator", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = NighteyestheDesecrator;
