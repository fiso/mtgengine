"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StubbornDenial extends UnimplementedCard {
  constructor(game) {
    super(game, "Stubborn Denial", "Khans of Tarkir", "KTK");
  }
}

module.exports = StubbornDenial;
