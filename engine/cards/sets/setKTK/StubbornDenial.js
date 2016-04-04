"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StubbornDenial extends Card {
  constructor(game) {
    super(game, "Stubborn Denial", "Khans of Tarkir", "KTK");
  }
}

module.exports = StubbornDenial;
