"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduBlazebringer extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Blazebringer", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduBlazebringer;
