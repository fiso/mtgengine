"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoRestfortheWicked extends Card {
  constructor(game) {
    super(game, "No Rest for the Wicked", "Tenth Edition", "10E");
  }
}

module.exports = NoRestfortheWicked;
