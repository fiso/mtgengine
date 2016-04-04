"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorgrassScreen extends Card {
  constructor(game) {
    super(game, "Razorgrass Screen", "Fifth Dawn", "5DN");
  }
}

module.exports = RazorgrassScreen;
