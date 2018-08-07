"use strict";
const Constants = require ("../../../Constants");
const IgniteDisorderBase = require("../setM10/IgniteDisorder");

class IgniteDisorder extends IgniteDisorderBase {
  constructor (game) {
    super(game, "Ignite Disorder", "Conflux", "CON");
  }
}

module.exports = IgniteDisorder;
