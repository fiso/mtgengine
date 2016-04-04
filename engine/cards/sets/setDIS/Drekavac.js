"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Drekavac extends Card {
  constructor(game) {
    super(game, "Drekavac", "Dissension", "DIS");
  }
}

module.exports = Drekavac;
