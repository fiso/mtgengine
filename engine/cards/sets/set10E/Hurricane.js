"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HurricaneBase = require("../setATH/Hurricane.js");

class Hurricane extends HurricaneBase {
  constructor(game) {
    super(game, "Hurricane", "Tenth Edition", "10E");
  }
}

module.exports = Hurricane;
