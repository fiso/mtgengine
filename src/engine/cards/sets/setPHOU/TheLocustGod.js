"use strict";
const Constants = require ("../../../Constants");
const TheLocustGodBase = require("../setHOU/TheLocustGod");

class TheLocustGod extends TheLocustGodBase {
  constructor (game) {
    super(game, "The Locust God", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = TheLocustGod;
