"use strict";
const Constants = require ("../../../Constants");
const PatagiaViperBase = require("../setC15/PatagiaViper");

class PatagiaViper extends PatagiaViperBase {
  constructor(game) {
    super(game, "Patagia Viper", "Dissension", "DIS");
  }
}

module.exports = PatagiaViper;
