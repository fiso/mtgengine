"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofTeveshSzat extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of Tevesh Szat", "Coldsnap", "CSP");
  }
}

module.exports = DiscipleofTeveshSzat;
