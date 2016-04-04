"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FiligreeAngelBase = require("../setARB/FiligreeAngel.js");

class FiligreeAngel extends FiligreeAngelBase {
  constructor(game) {
    super(game, "Filigree Angel", "Commander 2013 Edition", "C13");
  }
}

module.exports = FiligreeAngel;
