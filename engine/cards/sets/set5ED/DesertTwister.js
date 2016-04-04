"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesertTwisterBase = require("../setARN/DesertTwister.js");

class DesertTwister extends DesertTwisterBase {
  constructor(game) {
    super(game, "Desert Twister", "Fifth Edition", "5ED");
  }
}

module.exports = DesertTwister;
