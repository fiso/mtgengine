"use strict";
const Constants = require ("../../../Constants");
const IncendiaryFlowBase = require("../setF17/IncendiaryFlow");

class IncendiaryFlow extends IncendiaryFlowBase {
  constructor (game) {
    super(game, "Incendiary Flow", "Eldritch Moon", "EMN");
  }
}

module.exports = IncendiaryFlow;
