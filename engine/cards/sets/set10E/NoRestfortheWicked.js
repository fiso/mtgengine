"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoRestfortheWicked extends UnimplementedCard {
  constructor(game) {
    super(game, "No Rest for the Wicked", "Tenth Edition", "10E");
  }
}

module.exports = NoRestfortheWicked;
