"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PatagiaViperBase = require("../setC15/PatagiaViper.js");

class PatagiaViper extends PatagiaViperBase {
  constructor(game) {
    super(game, "Patagia Viper", "Dissension", "DIS");
  }
}

module.exports = PatagiaViper;
