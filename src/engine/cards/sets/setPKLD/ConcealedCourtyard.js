"use strict";
const Constants = require ("../../../Constants");
const ConcealedCourtyardBase = require("../setKLD/ConcealedCourtyard");

class ConcealedCourtyard extends ConcealedCourtyardBase {
  constructor (game) {
    super(game, "Concealed Courtyard", "Kaladesh Promos", "PKLD");
  }
}

module.exports = ConcealedCourtyard;
