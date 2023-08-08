import { TestBed } from '@angular/core/testing';
import { PurchaseListComponent } from './list.component';

describe('PurchaseListComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [PurchaseListComponent]
  }));

  it('should create the list', () => {
    const fixture = TestBed.createComponent(PurchaseListComponent);
    const list = fixture.componentInstance;
    expect(list).toBeTruthy();
  });

  it(`should have as title 'List of purchases'`, () => {
    const fixture = TestBed.createComponent(PurchaseListComponent);
    const list = fixture.componentInstance;
    expect(list.title).toEqual('List of purchases');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PurchaseListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('List of purchases');
  });
});
