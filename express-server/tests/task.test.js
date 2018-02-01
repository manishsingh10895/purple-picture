const 
    Task = require('../models/task.model'),
    http = require('chai-http'),
    expect = require('chai').expect;

describe('Task Module', () => {
    describe('Obj Stuff', () => {
        it('should export a function', () => {
            expect(Task).to.be.a('Function');
            expect(Task).to.not.be.a('undefined');
        });
    });
});

describe('Task CRUD', () => {
    describe('Task Creation', () => {
        
    });


    describe('Task Read', () => {
        
    });
});