"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HordelingOutburstBase = require("../setpFNM/HordelingOutburst.js");

class HordelingOutburst extends HordelingOutburstBase {
  constructor(game) {
    super(game, "Hordeling Outburst", "Khans of Tarkir", "KTK");
  }
}

module.exports = HordelingOutburst;
