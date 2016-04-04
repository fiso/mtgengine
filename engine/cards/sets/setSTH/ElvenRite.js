"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenRite extends Card {
  constructor(game) {
    super(game, "Elven Rite", "Stronghold", "STH");
  }
}

module.exports = ElvenRite;
