"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RazorHippogriffBase = require("../setC13/RazorHippogriff.js");

class RazorHippogriff extends RazorHippogriffBase {
  constructor(game) {
    super(game, "Razor Hippogriff", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RazorHippogriff;
